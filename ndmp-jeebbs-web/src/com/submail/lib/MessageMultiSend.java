package com.submail.lib;


import com.submail.config.AppConfig;
import com.submail.lib.base.ISender;
import com.submail.lib.base.SenderWapper;
import net.sf.json.JSONObject;

/**
 * message/multixsend 是 SUBMAIL 的短信一对多 即1条API请求发送多个号码，并可以灵活控制每个联系人的文本变量）和群发 API
 * 。
 *
 * @author submail
 */
public class MessageMultiSend extends SenderWapper {

    public static final String TO = "to";
    public static final String CONTENT = "content";
    public static final String Vars = "vars";
    public static final String MULTI = "multi";
    protected AppConfig config = null;

    public MessageMultiSend(AppConfig config) {

        this.config = config;

    }

    public void addTo(String to) {
        requestData.addWithComma(TO, to);
        ;
    }

    public void addContent(String content) {
        requestData.addWithComma(CONTENT, content);
        ;
    }

    public void addVars(JSONObject json) {
        requestData.setVarJson(json);
    }

    public void addMulti(String toval) {

        requestData.addMulti(Vars, TO, toval, MULTI);
    }

    @Override
    public ISender getSender() {
        return new Message(this.config);
    }

    public String multixsend() {
        return getSender().multisend(requestData);
    }

}
