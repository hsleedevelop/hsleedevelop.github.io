---
layout: post
title: Crashlytics - resolve "missing dSymbols" by build script
description: Crashlytics - resolve "missing dSymbols" by build script
category: ios
tags: [ios, fabric]
date: "2018-02-13"
path: Crashlytics - resolve "missing dSymbols" by build script
---

Add below script to script on build phases

```

"${PODS_ROOT}/Fabric/upload-symbols" -a [your_api_key] -p ios  "${CONFIGURATION_BUILD_DIR}"

```
