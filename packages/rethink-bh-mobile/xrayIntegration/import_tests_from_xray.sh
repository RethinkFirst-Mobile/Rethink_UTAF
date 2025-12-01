#!/bin/bash

BASE_URL=https://xray.cloud.getxray.app
PROJECT=<PROJECT_KEY>

KEYS=$1

token=$(curl -H "Content-Type: application/json" -X POST --data @"packages/rethink-bh-mobile/xrayIntegration/xray_auth.json" $BASE_URL/api/v2/authenticate| tr -d '"')

rm -rf packages/rethink-bh-mobile/e2e/features/$KEYS.zip

curl \
-H "Content-Type: application/json" \
-X GET \
-H "Authorization: Bearer $token" \
"$BASE_URL/api/v1/export/cucumber?keys=$KEYS" \
-o packages/rethink-bh-mobile/e2e/features/$KEYS.zip


# rm -rf packages/rethink-bh-mobile/e2e/xray/$KEYS.feature
unzip -o packages/rethink-bh-mobile/e2e/features/$KEYS.zip -d packages/rethink-bh-mobile/e2e/features/$KEYS
mv packages/rethink-bh-mobile/e2e/features/$KEYS/*.feature packages/rethink-bh-mobile/e2e/features/$KEYS.feature
rm -rf packages/rethink-bh-mobile/e2e/features/$KEYS.zip
rm -rf packages/rethink-bh-mobile/e2e/features/$KEYS