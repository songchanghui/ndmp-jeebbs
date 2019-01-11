package com.ucpaas.client;


import com.alibaba.fastjson.JSONObject;
import com.ucpaas.HttpClientUtil;
import org.springframework.stereotype.Service;

@Service
public class JsonReqClient extends AbsRestClient {
    private String sid;
    private String token;
    private String appid;
    private String templateid;

    public String sendSms(String param, String mobile, String uid) {
        return sendSms(this.sid, this.token, this.appid, templateid, param, mobile, uid);
    }

    @Override
    public String sendSms(String sid, String token, String appid, String templateid, String param, String mobile, String uid) {

        String result = "";

        try {
            String url = getStringBuffer().append("/sendsms").toString();

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("sid", sid);
            jsonObject.put("token", token);
            jsonObject.put("appid", appid);
            jsonObject.put("templateid", templateid);
            jsonObject.put("param", param);
            jsonObject.put("mobile", mobile);
            jsonObject.put("uid", uid);

            String body = jsonObject.toJSONString();

            System.out.println("body = " + body);

            result = HttpClientUtil.postJson(url, body, null);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public String sendSmsBatch(String sid, String token, String appid, String templateid, String param, String mobile, String uid) {

        String result = "";

        try {
            String url = getStringBuffer().append("/sendsms_batch").toString();

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("sid", sid);
            jsonObject.put("token", token);
            jsonObject.put("appid", appid);
            jsonObject.put("templateid", templateid);
            jsonObject.put("param", param);
            jsonObject.put("mobile", mobile);
            jsonObject.put("uid", uid);

            String body = jsonObject.toJSONString();

            System.out.println("body = " + body);

            result = HttpClientUtil.postJson(url, body, null);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public String addSmsTemplate(String sid, String token, String appid, String type, String template_name, String autograph, String content) {

        String result = "";

        try {
            String url = getStringBuffer().append("/addsmstemplate").toString();

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("sid", sid);
            jsonObject.put("token", token);
            jsonObject.put("appid", appid);
            jsonObject.put("type", type);
            jsonObject.put("template_name", template_name);
            jsonObject.put("autograph", autograph);
            jsonObject.put("content", content);

            String body = jsonObject.toJSONString();

            System.out.println("body = " + body);

            result = HttpClientUtil.postJson(url, body, null);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public String getSmsTemplate(String sid, String token, String appid, String templateid, String page_num, String page_size) {

        String result = "";

        try {
            String url = getStringBuffer().append("/getsmstemplate").toString();

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("sid", sid);
            jsonObject.put("token", token);
            jsonObject.put("appid", appid);
            jsonObject.put("templateid", templateid);
            jsonObject.put("page_num", page_num);
            jsonObject.put("page_size", page_size);

            String body = jsonObject.toJSONString();

            System.out.println("body = " + body);

            result = HttpClientUtil.postJson(url, body, null);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public String editSmsTemplate(String sid, String token, String appid, String templateid, String type, String template_name, String autograph, String content) {

        String result = "";

        try {
            String url = getStringBuffer().append("/editsmstemplate").toString();

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("sid", sid);
            jsonObject.put("token", token);
            jsonObject.put("appid", appid);
            jsonObject.put("templateid", templateid);
            jsonObject.put("type", type);
            jsonObject.put("template_name", template_name);
            jsonObject.put("autograph", autograph);
            jsonObject.put("content", content);

            String body = jsonObject.toJSONString();

            System.out.println("body = " + body);

            result = HttpClientUtil.postJson(url, body, null);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public String deleterSmsTemplate(String sid, String token, String appid, String templateid) {

        String result = "";

        try {
            String url = getStringBuffer().append("/deletesmstemplate").toString();

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("sid", sid);
            jsonObject.put("token", token);
            jsonObject.put("appid", appid);
            jsonObject.put("templateid", templateid);

            String body = jsonObject.toJSONString();

            System.out.println("body = " + body);

            result = HttpClientUtil.postJson(url, body, null);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAppid() {
        return appid;
    }

    public void setAppid(String appid) {
        this.appid = appid;
    }

    public String getTemplateid() {
        return templateid;
    }

    public void setTemplateid(String templateid) {
        this.templateid = templateid;
    }
}
