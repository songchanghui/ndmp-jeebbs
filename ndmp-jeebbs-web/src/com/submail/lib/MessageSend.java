package com.submail.lib;

import com.submail.config.AppConfig;
import com.submail.lib.base.ISender;
import com.submail.lib.base.SenderWapper;


/**
 * message/send API 不仅提供强大的短信发送功能,
 * 并在API中集成了地址薄发送功能。你可以通过设定一些参数来确定 API 以哪种模式发送。
 *
 * @author submail
 */
public class MessageSend extends SenderWapper {

    public static final String TO = "to";
    public static final String CONTENT = "content";
    protected AppConfig config = null;

    public MessageSend(AppConfig config) {

        this.config = config;

    }

    public void addTo(String to) {
        requestData.addWithComma(TO, to);
        ;
    }

    public void addContent(String content) {
        requestData.addWithComma(CONTENT, content);
    }


    @Override
    public ISender getSender() {
        return new Message(this.config);
    }

    public String send() {
        return getSender().send(requestData);
    }


}

	
	
	


