# Note-Taker
GitHub Repo: https://github.com/425megs/Note-Taker
Heroku: https://frozen-thicket-81710.herokuapp.com/

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Description

This application can be used to write and save notes.

## Mock-Up
![](./Assets/11-express-homework-demo-01.png)
![](./Assets/11-express-homework-demo-02.png)

==============================================

The following HTML routes should be created:

* `GET *` should return the `index.html` file.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

  * Application back end must store notes that have a unique id in a JSON file.


- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
