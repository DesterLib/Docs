# Local Deployement

-  Download the latest release from [GitHub](https://github.com/DesterLib/Dester/releases/latest)
- Unzip the release and open a terminal inside the unzipped folder
-  Install the Python dependencies by running `pip3 install -r requirements.txt`
- Add environment variables. (docs will be added soon)
- In the terminal run `uvicorn main:app --host 0.0.0.0 --port 35500`
>Before running, make sure you've installed a suitable version of rclone installed in your machine
-  Open Dester at [`http://localhost:35500`](http://localhost:35500) and go through the setup process.
- Done.

# Common Errors

## Command `uvicorn` not found

### **Issue**

You might have got into something like this:

- On Command Prompt
```
"uvicorn" is not recognized as an internal or external command,
operable program or batch file.
```

- On Windows Terminal / Powershell
```
uvicorn : The term 'uvicorn' is not recognized as the name of a cmdlet, function, script file, or operable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ uvicorn main:app --host 0.0.0.0 --port 35500
+ ~~~~~~~
    + CategoryInfo          : ObjectNotFound: (uvicorn:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```

- Linux / Mac

```sh
uvicorn: command not found
```

### **Solution**

>If you did a user install, the executable probably ended up in ~/.local/bin/. If it's there, you'll probably want to add that directory to your PATH. 
>([source](https://github.com/encode/uvicorn/issues/353))

Try running:
```sh
python3 -m uvicorn main:app --host 0.0.0.0 --port 35500
```

---

## `RuntimeError: no running event loop`

### **Issue**

```sh
Traceback (most recent call last):
  File "/workspaces/Backend/main.py", line 231, in <module>
    loop.create_task(startup())
  File "/opt/python/3.10.4/lib/python3.10/asyncio/tasks.py", line 336, in create_task
    loop = events.get_running_loop()
RuntimeError: no running event loop
sys:1: RuntimeWarning: coroutine 'startup' was never awaited
```

>![](https://telegra.ph/file/973ad6c979f3d722eda7d.jpg)
>[Source](https://telegram.dog/Dester_Community/11548)

### **Solution**

Currently, there is no solutions for this but we are still working on it.

---

## `KeyError: 'client_id'`

### **Issue**
>![](https://telegra.ph/file/d193aa2f1244ebc5b57f4.png)
>[Source](https://telegram.dog/Dester_Community/11299)

### **Solution**

>You might have probablily accedently clicked the add new categories button which created an empty category which caused this issue.

Goto `Settings` > `Categories` and remove the empty category

---

## `pymongo.errors.ConfigurationError: Invalid URI host`

### **Issue**

>![](https://telegra.ph/file/94c57c823ce95dd706c6e.png)
>[Source](https://telegram.dog/Dester_Community/11282)

```sh
Traceback (most recent call last):
  File "/workspaces/Backend/main.py", line 11, in <module>
    from app.api import main_router
  File "/workspaces/Backend/app/api/__init__.py", line 23, in <module>
    raise e
  File "/workspaces/Backend/app/api/__init__.py", line 17, in <module>
    imported_route = getattr(__import__(module.format(mod), fromlist=[func]), func)
  File "/workspaces/Backend/app/api/routes/assets.py", line 1, in <module>
    from app.apis import rclone
  File "/workspaces/Backend/app/apis.py", line 7, in <module>
    mongo = MongoDB(
  File "/workspaces/Backend/app/core/mongodb.py", line 15, in __init__
    self.client = MongoClient(
  File "/home/codespace/.local/lib/python3.10/site-packages/pymongo/mongo_client.py", line 704, in __init__
    res = uri_parser.parse_uri(
  File "/home/codespace/.local/lib/python3.10/site-packages/pymongo/uri_parser.py", line 541, in parse_uri
    dns_resolver = _SrvResolver(fqdn, connect_timeout, srv_service_name, srv_max_hosts)
  File "/home/codespace/.local/lib/python3.10/site-packages/pymongo/srv_resolver.py", line 73, in __init__
    raise ConfigurationError(_INVALID_HOST_MSG % (fqdn,))
pymongo.errors.ConfigurationError: Invalid URI host: none is not a valid hostname for 'mongodb+srv://'. Did you mean to use 'mongodb://'?
```

### **Solution**

> You might have forgot to add the environment variables.

- Create a file named `.env` in the root directory
- Add your secrets in the following format given below
```sh
MONGODB_DOMAIN=
MONGODB_USERNAME=
MONGODB_PASSWORD=
```

An example might look something like this:

```sh
MONGODB_DOMAIN=cluster0.t4blah1r.mongodb.net
MONGODB_USERNAME=username
MONGODB_PASSWORD=password
```
- Now save it and run the start command again.

---

More issues will be added soon ➡️