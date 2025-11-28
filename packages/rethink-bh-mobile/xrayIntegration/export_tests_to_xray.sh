#!/bin/bash

BASE_URL=https://xray.cloud.getxray.app
PROJECT=<PROJECT_KEY>
KEYS=$1

token=$(curl -H "Content-Type: application/json" -X POST --data @"packages/rethink-bh-mobile/xrayIntegration/xray_auth.json" $BASE_URL/api/v2/authenticate| tr -d '"')

cd packages/rethink-bh-mobile/e2e/features
  if [[ "$OSTYPE" == "msys"* ]]; then
    7z a -tzip -r features.zip $KEYS.feature
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    zip -r features.zip $KEYS.feature
  fi
cd -

curl \
-H "Content-Type: multipart/form-data" \
-H "Authorization: Bearer $token"  \
-F "file=@packages/rethink-bh-mobile/e2e/features/features.zip" \
-F "testInfo=@packages/rethink-bh-mobile/xrayIntegration/testInfo.json" \
"$BASE_URL/api/v2/import/feature?projectKey=$PROJECT"

rm -rf packages/rethink-bh-mobile/e2e/features/features.zip
