package com.submail.lib;

import com.submail.config.AppConfig;
import com.submail.lib.base.ISender;
import com.submail.lib.base.SenderWapper;


/**
 * internationalsms/send 是 SUBMAIL 的国际短信 API。 internationalsms/send 和短信 API 共享短信模板，
 * 当使用 internationalsms/send API 提交短信时，SUBMAIL 会与您账户中短信模板进行匹配，当匹配成功后，
 * 短信立即发送
 *
 * @author submail
 */
public class InternationalsmsSend extends SenderWapper {

    public static final String TO = "to";
    public static final String CONTENT = "content";
    protected AppConfig config = null;

    public InternationalsmsSend(AppConfig config) {

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
        return new Internationalsms(this.config);
    }

    public String send() {
        return getSender().send(requestData);
    }


}

	
	
	


