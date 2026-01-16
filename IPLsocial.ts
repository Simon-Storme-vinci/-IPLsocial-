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

        if(/^.*[ ].*$/.test(email)){
            return false;
        }

        if(/^@/.test(email)){
            return false;
        } 

        if(/@$/.test(email)){
            return true; 
        }

        return true;
    }
}

export default IPLsocial;