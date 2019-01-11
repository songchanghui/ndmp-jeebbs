/**
 * @author Tony
 * @date 2018-01-10
 * @project rest_demo
 */
package com.ucpaas;

import com.ucpaas.client.AbsRestClient;
import com.ucpaas.client.JsonReqClient;

import java.io.IOException;


public class RestTest {

    static AbsRestClient InstantiationRestAPI() {
        return new JsonReqClient();
    }

    public static void testSendSms(String sid, String token, String appid, String templateid, String param, String mobile, String uid) {
        try {
            String result = InstantiationRestAPI().sendSms(sid, token, appid, templateid, param, mobile, uid);
            System.out.println("Response content is: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void testSendSmsBatch(String sid, String token, String appid, String templateid, String param, String mobile, String uid) {
        try {
            String result = InstantiationRestAPI().sendSmsBatch(sid, token, appid, templateid, param, mobile, uid);
            System.out.println("Response content is: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void testAddSmsTemplate(String sid, String token, String appid, String type, String template_name, String autograph, String content) {
        try {
            String result = InstantiationRestAPI().addSmsTemplate(sid, token, appid, type, template_name, autograph, content);
            System.out.println("Response content is: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public static void testGetSmsTemplate(String sid, String token, String appid, String templateid, String page_num, String page_size) {
        try {
            String result = InstantiationRestAPI().getSmsTemplate(sid, token, appid, templateid, page_num, page_size);
            System.out.println("Response content is: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public static void testEditSmsTemplate(String sid, String token, String appid, String templateid, String type, String template_name, String autograph, String content) {
        try {
            String result = InstantiationRestAPI().editSmsTemplate(sid, token, appid, templateid, type, template_name, autograph, content);
            System.out.println("Response content is: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public static void testDeleterSmsTemplate(String sid, String token, String appid, String templateid) {
        try {
            String result = InstantiationRestAPI().deleterSmsTemplate(sid, token, appid, templateid);
            System.out.println("Response content is: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /**
     * 测试说明  启动main方法后，请在控制台输入数字(数字对应 相应的调用方法)，回车键结束
     * 参数名称含义，请参考rest api 文档
     *
     * @throws IOException
     * @method main
     */
    public static void main(String[] args) throws IOException {
        String sid = "0b01aa4bfff8050f7aaa6ba3717e456b";
        String token = "5abe9ab333fecfc1d541613b4790b5de";
        String appid = "684a21cc34724ea7b992d49720562ecf";
        String templateid = "420580";
        String param = "";
        String mobile = "15114812172";
        String uid = "15114812172";
        testSendSms(sid, token, appid, templateid, param, mobile, uid);
    }
}
