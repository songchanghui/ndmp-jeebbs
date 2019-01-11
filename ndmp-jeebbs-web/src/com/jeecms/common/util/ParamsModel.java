package com.jeecms.common.util;

import javax.servlet.ServletRequest;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by sd3232 on 2019/1/11.
 */
public class ParamsModel {

    public static Map<String, String> showParams(ServletRequest request) {
        Map<String, String> map = new HashMap<String, String>();
        Enumeration paramNames = request.getParameterNames();
        while (paramNames.hasMoreElements()) {
            String paramName = (String) paramNames.nextElement();

            String[] paramValues = request.getParameterValues(paramName);
            if (paramValues.length > 0) {
                String paramValue = paramValues[0];
                if (paramValue.length() != 0) {
                    map.put(paramName, paramValue);
                }
            }
        }

        String ip = request.getRemoteAddr();
        map.put("IP", ip);

        return map;
    }
}
