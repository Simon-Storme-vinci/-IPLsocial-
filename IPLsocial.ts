class IPLsocial {
    validationEmail(email: string): boolean {
        if(!/@/.test(email)){
            return false;
        }

        if(!/^@[^.]+$/.test(email)){
            return false;
        }

        if(/.$/.test(email)){
            return false;
        }

       

        return true;
    }
}

export default IPLsocial;