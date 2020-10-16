#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games/:id"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "games": {
      "_id": "'"${ID}"'"
    }
  }'

echo

// TOKEN="" ID="" sh curl-scripts/newgame.sh
// Unable to test this until I have games attached to a user
