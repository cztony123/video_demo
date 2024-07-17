const MyRules = {
    //用户名登录
    nameLoginRules(form) {
        //校验用户名
        if(!form.userName){
            return "请输入用户名"
        }

        //用户名正则校验
        const regexName = /^[a-zA-Z0-9_.]{5,12}$/
        if(!regexName.test(form.userName)){
            return "用户名6-12位, 只能包含字母、数字、下划线及小数点"
        }

        //校验密码
        if(!form.password){
            return "请输入密码"
        }

        //密码正则校验
        const regexPwd = /^\w{6,12}$/
        if(!regexPwd.test(form.password)){
            return "密码不能为空,并且6-12位"
        }
    },


    //手机号登录
    telLoginRules(form) {
        //校验手机号
        if(!form.tel){
            return "请输入手机号"
        }

        //手机号正则校验
        const regexTel = /^1[3-9]\d{9}$/;
        if(!regexTel.test(form.tel)){
            return "手机号不正确"
        }

        //校验验证码
        if(!form.code){
            return "请输入验证码"
        }
    },


    //注册
    enrolLoginRules(form) {
        //校验用户名
        if(!form.userName){
            return "请输入用户名"
        }

        //用户名正则校验
        const regexName = /^[a-zA-Z0-9_.]{5,12}$/
        if(!regexName.test(form.userName)){
            return "用户名6-12位, 只能包含字母、数字、下划线及小数点"
        }

        //校验手机号
        if(!form.tel){
            return "请输入手机号"
        }

        //手机号正则校验
        const regexTel = /^1[3-9]\d{9}$/;
        if(!regexTel.test(form.tel)){
            return "手机号不正确"
        }

        //校验验证码
        if(!form.code){
            return "请输入验证码"
        }

        //校验密码
        if(!form.password){
            return "请输入密码"
        }

        //密码正则校验
        const regexPwd = /^\w{6,12}$/
        if(!regexPwd.test(form.password)){
            return "密码不能为空,并且6-12位"
        }

        //校验确认密码
        console.log(form.password)
        console.log(form.confirmPwd)
        if(form.password != form.confirmPwd){
            return "两次密码不一致"
        }
        
    },
}

export default MyRules
