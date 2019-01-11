package com.submail;


import com.submail.config.AppConfig;
import com.submail.lib.MessageSend;
import com.submail.utils.ConfigLoader;

public class MessageSendDemo {
    public static void main(String[] args) {
        AppConfig config = ConfigLoader.load(ConfigLoader.ConfigType.Message);
        MessageSend submail = new MessageSend(config);
        submail.addTo("15114812172");
        submail.addContent("【101论坛】您的验证码：5555 5分钟内有效");
        submail.send();
    }

}
