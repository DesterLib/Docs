# Getting Started

Dester is a powerful and lightweight media solution to interface your movie and TV libraries in a goddamn gorgeous way.

Check out the sidebar on the left to go through deployment instructions, view screenshots, or meet the Dester team!

## Requirements

1. An account on Heroku / VPS to host your Dester instance.

2. MongoDB account to store metadata and user information.

3. Finally your media library which has your movies/shows stored either locally or on cloud.

## Environment Variables

```MONGODB_DOMAIN``` : a MongoDB cluster domain
    Example: cluster.fe43d.mongodb.net

```MONGODB_USERNAME``` : a username for a MongoDB admin user that has access to the cluster inputted in the MONGODB_DOMAIN
    Example: dester

```MONGODB_PASSWORD``` : a password for a MongoDB admin user that has access to the cluster inputted in the MONGODB_DOMAIN
    Example: P@ssword123
