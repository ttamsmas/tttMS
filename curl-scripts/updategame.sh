#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "games": {}
  }'

echo
