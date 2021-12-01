const data = {
  'EasyDoc.json': [
    {
      match: '/v3/user/list',
      jsonFile: '/easy-doc/public/user3.json',
    },
    {
      match: '/v3/dept/list/[0-9]+',
      jsonFile: '/easy-doc/public/dept.json',
    },
    {
      match: '/v2/user/list',
      jsonFile: '/easy-doc/public/user2.json',
    },
    {
      match: '/easy-doc/example/handle-doc.html',
      jsonFile: '/easy-doc/public/handle-doc.json',
    },
  ],
  'handle-doc.json': {
    pages: [
      {
        description: '页面说明文档1',
        auth: 'DEVELOPMENT',
      },
      {
        description: '页面说明文档2',
        auth: 'TEST',
      },
    ],
    docs: [
      {
        docId: 'aa8',
        description:
          '一个按钮A一个按钮A一个按钮A一个按钮A一个按钮A一个按钮A一个按钮A一个按钮A一个按钮A一个按钮A一个按A一个按钮A一个按钮A一个按钮A一钮A一',
        auth: 'DEVELOPMENT',
      },
      {
        docId: 'aa10',
        description: '一个按钮B',
        auth: 'DEVELOPMENT',
      },
    ],
    edits: [
      {
        docId: 'aa15',
        editUrl: 'https://juejin.cn/team/6932676282429898766/posts',
        auth: 'DEVELOPMENT',
      },
    ],
  },
}
export function requestData(path: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    const arr = path.split('/')
    const key = arr[arr.length - 1]
    process.nextTick(() => (data[key] ? resolve(data[key]) : reject(new Error('未找到'))))
  })
}

export default {}
