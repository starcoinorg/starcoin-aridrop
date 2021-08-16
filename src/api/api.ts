import Server from './server'

class API extends Server {
  async getProjectList(params = {}):Promise<any> {
    try {
      let rlt = await this.axios(
        "get",
        'http://localhost:1323/getProjectList',
        params,
      )
      if (rlt) {
        return rlt    
      } else {
        let err = {
          tip: 'Fail to get crime reacord',
          data: params,
          url: 'http://localhost:1323/getProjectList',
        }
        throw err
      }
    } catch (err) {
      throw err
    }
  }
  async upload(file: any) {
      let formData = new FormData()
      formData.append('file', file)
      let rlt = await this.axios(
        "POST",
        'http://localhost:1323/uploadProject',
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      return rlt
  }
}

export default new API()