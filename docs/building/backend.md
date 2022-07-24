# Backend

### Prerequisites

-   [Python3](https://python.org/downloads/)
-   [Rclone](https://rclone.org/downloads/)

### Backend Setup

- Download the source code from the Dester [backend repo](https://github.com/DesterLib/Backend) from GitHub as a zip or with:
```sh
git clone https://github.com/DesterLib/Backend.git
```
- Open a terminal at the root of the the downloaded folder
- Install the pip dependencies with 
```sh
pip3 install -r requirements.txt
```
> At this point, the server setup is done, when you [run the server](#running-the-backend), you could see the server responding it's working fine.

#### Buiding the frontend
To have a UI built into the server, build the frontend and move the `build` folder into the server's root. 
You can either use out script or refer to the guide in building the frontend manually

##### Using the build.sh script

You may use the `build.sh` script provided with the Backend repo in the `scripts/` directory to build the frontend without much effort.

For that, Fire up your terminal in the backend folder and run:

```sh
bash scripts/build.sh
```

> ⚠️ Note that this script only works on Linux based distos and certain in *windows having WSL support.

##### Using the frontend guide
You may see the [frontend guide](/building/frontend#build-guide) for more info.

And with that done, you need to run the webapp.

### Running the backend

> Make sure your terminal is fired up in the root directory of the backend folder.

**RUN**:
```sh
uvicorn main:app --host 0.0.0.0 --port 35500
```

>Encountered any errors? see the [Common errors section](/getting-started/local-deployement.md#common-errors). 🙌