FORMAT: 1A

# Overview
影院详情页票房概览数据

## Boxoffice Overview [/v1/movie/boxoffice/overview]

### list boxoffice overview [POST]

+ Request (application/json)
    + attributes
        + ddd: '123' (string)

+ Response 200 (application/json)
    + attributes
        + ret: 0
        + msg: ''
        + data (object)
            + totalBoxoffice: 159796000 (number)
            + trend (object) - `返回数目：上映日到今天的实时数据 + 未来 5 天的预售数据，`
                + boxoffice
                  + date: `2015-01-10`, `2015-01-1` (array)
                  + data: 2222, 3131 (array)
                  + presell: (object) - 如果没有预售数据 presell: null
                      + date: '2015-01-10', '2015-01-1' (array)
                      + data: 2222, 3131 (array)
                + booking: (object) - 排片数据，逻辑同 boxoffice
