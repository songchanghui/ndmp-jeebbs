package com.jeecms.common.web;

import com.jeecms.common.util.FileUtils;

import javax.servlet.*;
import java.io.IOException;

public class ParamsFilter implements Filter {
    @Override
    public void destroy() {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        FileUtils.writerInfo(request);
        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) {

    }

}