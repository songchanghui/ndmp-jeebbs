package com.jeecms.common.util;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.collections.map.HashedMap;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.net.URI;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;
import java.util.Map;

/**
 * Created by sd3232 on 2019/1/11.
 */
public class FileUtils {
    public static boolean writerInfo(ServletRequest request) {
        HttpServletRequest hsr = (HttpServletRequest) request;
        String host = hsr.getRequestURL().toString();
        try {
            host = new URI(host).getAuthority();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

        FileWriter fw;
        String filePath = hsr.getSession().getServletContext().getRealPath("/") + "headerData/";
        String filename = filePath + "headerInfo." + new SimpleDateFormat("yyyy_MM_dd").format(new Date()) + ".json";
        File file = new File(filePath);
        if (!file.exists() && !file.isDirectory()) {
            file.mkdirs();
        }
        try {
            fw = new FileWriter(new File(filename), true);
            PrintWriter pw = new PrintWriter(fw);

            Map<String, String> map = new HashedMap();
            Enumeration enu = hsr.getHeaderNames();
            while (enu.hasMoreElements()) {
                String name = enu.nextElement().toString();
                if (name.equals("referer")) {
                    String url = hsr.getHeader(name);
                    try {
                        url = new URI(url).getAuthority();
                    } catch (URISyntaxException e) {
                        e.printStackTrace();
                    }
                    if (url.equals(host)) {
                        return false;
                    }
                }
                map.put(name, hsr.getHeader(name));
            }

            if (map != null && map.size() > 0) {
                JSONObject json = new JSONObject();
                for (String key : map.keySet()) {
                    if (map.get(key) != null) {
                        json.put(key, map.get(key));
                    }
                }
                pw.println(json.toJSONString());
                pw.flush();
            } else {
                return false;
            }
            fw.flush();
            fw.close();
            pw.close();
            return true;
        } catch (Exception e) {
        }
        return false;
    }
}
