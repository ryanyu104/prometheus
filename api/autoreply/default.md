FORMAT: 1A

# 自动回复

## 回复 [/api/v1/autoreply/{type}/{id}]
+ Parameters
    + type (enum[string], required)
        + Default: `default`
        + Members
            + `default`
            + `follow`
    + id  (number, optional)

### 获取回复数据 [GET]

+ Request

+ Response 200 (application/json)
    + attributes
        - One Of
            - data (array,fixed)
                - (object)
                    + id: (number)
                    + msgType : text (string) - 唯一值text
                    + content: (string) - 可以有<br>标签
            - data (array,fixed)
                - (object)
                    - id: (number)
                    - msgType : news (string) - 唯一值news
                    - articleCount: (number) - 最大值为10
                    - title:  (string)
                    - description:  (string)
                    - picUrl:  (string)
                    - url:  (string)

### 发送回复数据 [POST]

+ Request (application/json)
    + attributes
        - One Of
            - data (object)
                + msgType : text (string) - 唯一值text
                + content: (string) - 可以有<br>标签
            - data (object)
                + msgType : news (string) - 唯一值news
                + articleCount: (number) - 最多10条
                + articles:  (string)
                + title:  (string)
                + description:  (string)
                + picUrl:  (string)
                + url:  (string)

+ Response 200 (application/json)
   + attributes
       - (object)


### 删除回复数据 [DELETE]
+ Parameters
    + type (enum[string], required)
        + Default: `default`
        + Members
            + `default`
            + `follow`
    + id  (number, required)

+ Request

+ Response 200 (application/json)
    + attributes
        - (object)

### 更新回复数据 [PUT]
+ Parameters
    + type (enum[string], required)
        + Default: `default`
        + Members
            + `default`
            + `follow`
    + id  (number, required)

+ Request (application/json)
    + attributes
        - One Of
            - data (object)
                + msgType : text (string) - 唯一值text
                + content: (string) - 可以有<br>标签
            - data (object)
                + msgType : news (string) - 唯一值news
                + articleCount: (number) - 最多10条
                + articles:  (string)
                + title:  (string)
                + description:  (string)
                + picUrl:  (string)
                + url:  (string)

+ Response 200 (application/json)
    + attributes
        - (object)

