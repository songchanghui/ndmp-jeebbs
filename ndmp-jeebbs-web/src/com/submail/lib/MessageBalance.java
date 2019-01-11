package com.submail.lib;


import com.submail.config.AppConfig;
import com.submail.lib.base.ISender;
import com.submail.lib.base.SenderWapper;

public class MessageBalance extends SenderWapper {

    protected AppConfig config = null;

    public MessageBalance(AppConfig config) {
        this.config = config;
    }

    @Override
    public ISender getSender() {
        return new Message(this.config);
    }

    public String balance() {
        return getSender().balance(requestData);
    }

}
