package com.submail.utils;

import com.submail.config.AppConfig;
import com.submail.config.MessageConfig;

import java.util.Properties;

/**
 * 这个类通过加载app_config.properties文件创建配置对象并获取值，包括创建
 * MailConfig，MessageConfig，VoiceConfig,InternationalsmsConfig,MobiledataConfig
 *
 * @author submail
 * @see AppConfig
 * @see MessageConfig
 */
public class ConfigLoader {

    private static Properties pros = null;

    /**
     * 加载文件时，类载入，静态块内部的操作将被运行一次
     * */
    static {
        pros = new Properties();
        pros.put("msg_appid", "31393");
        pros.put("msg_appkey", "9b1a3a76c5efa92f8388cff679a58921");
        pros.put("msg_signtype", "ss=123456");
    }

    /**
     * 外部类的静态方法，可以通过加载文件创建配置。
     *
     * @param type ConfigType
     * @return If the type is ConfigType#Mail,return the instance of
     * {@link MessageConfig}. And,if the type is ConfigType#Message,return
     * the instance of {@link MessageConfig}.
     */
    public static AppConfig load(ConfigType type) {
        switch (type) {
            case Message:
                return createMessageConfig();
            default:
                return null;
        }
    }

    ;

    private static AppConfig createMessageConfig() {
        AppConfig config = new MessageConfig();
        config.setAppId(pros.getProperty(MessageConfig.APP_ID));
        config.setAppKey(pros.getProperty(MessageConfig.APP_KEY));
        config.setSignType(pros.getProperty(MessageConfig.APP_SIGNTYPE));
        return config;
    }

    /**
     * enum define two kinds of configuration.
     */
    public static enum ConfigType {
        Mail, Message, Voice, Internationalsms, Mobiledata
    }

}
