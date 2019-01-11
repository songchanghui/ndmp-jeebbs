package com.submail.lib;


import com.submail.config.AppConfig;
import com.submail.lib.base.ISender;
import com.submail.lib.base.SenderWapper;

public class InternationalsmsBalance extends SenderWapper {
    protected AppConfig config = null;

    public InternationalsmsBalance(AppConfig config) {
        this.config = config;
    }

    @Override
    public ISender getSender() {
        return new Internationalsms(this.config);
    }

    public String balance() {
        return getSender().balance(requestData);
    }

}
