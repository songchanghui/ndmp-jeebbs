package com.submail.lib;

import com.submail.config.AppConfig;
import com.submail.lib.base.ISender;
import com.submail.lib.base.SenderWapper;


/**
 * internationalsms/xsend 是 SUBMAIL 的国际短信 API。
 *
 * @author submail
 */
public class InternationalsmsXSend extends SenderWapper {

    public static final String TO = "to";
    public static final String PROJECT = "project";
    public static final String VARS = "vars";
    protected AppConfig config = null;

    public InternationalsmsXSend(AppConfig config) {

        this.config = config;

    }

    public void addTo(String to) {
        requestData.addWithComma(TO, to);
        ;
    }


    public void addProject(String project) {
        requestData.addWithComma(PROJECT, project);
        ;
    }

    public void addVars(String key, String val) {
        requestData.addWithJson(VARS, key, val);
    }


    @Override
    public ISender getSender() {
        return new Internationalsms(this.config);
    }

    public String xsend() {
        return getSender().xsend(requestData);
    }


}

	
	
	


