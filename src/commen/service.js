import Taro, { connectSocket } from '@tarojs/taro'

const preHttp ='http://saicem.top:5905/'
const Fetch = (url, date={}, method = 'GET') => {
    const header={
        'content-type':'application/json',
        token:Taro.getStorageSync('token')
    };
    return Taro.request({
        url= preHttp +url,
        data,
        method,
        header
    }).then(res => {
        switch(res.statusCode){
            case 200:
                if(res.data){
                    return res.data;
                }else{
                    return res.statusCode;
                }
            case 400:
                throw new Error('没有权限访问');
            case 401:
                const id = Taro.getStorageSync('pwd')
                if(id&&password){
                    Taro.request({
                        url: 'http://saicem.top:5905/api/timecap/loginccnu',
                        data:{
                            userid:id,
                            pwd:password
                        },
                        method:'POST',
                        header:{'content-type':'application/json'}
                    }).then(back=>{
                        Taro.setStorage({
                            key:'token',
                            data:back.data.token,
                        })
                    })
                }
                if(res.data){
                    return res.data;
                } else {
                    return res.Code;
                }
            case 404:
                throw new Error('not found');
            case 500:
            case 502:
                return {
                    msg:'server_wrong'
                }
        }
    });
};

    exports default Fetch;