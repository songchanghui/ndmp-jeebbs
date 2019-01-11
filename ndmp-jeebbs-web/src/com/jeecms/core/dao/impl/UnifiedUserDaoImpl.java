package com.jeecms.core.dao.impl;

import com.jeecms.common.hibernate4.HibernateBaseDao;
import com.jeecms.common.page.Pagination;
import com.jeecms.core.dao.UnifiedUserDao;
import com.jeecms.core.entity.UnifiedUser;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UnifiedUserDaoImpl extends HibernateBaseDao<UnifiedUser, Integer>
		implements UnifiedUserDao {
	public UnifiedUser getByUsername(String username) {
		return findUniqueByProperty("username", username);
	}

	public UnifiedUser getByPhoneNum(String phoneNum) {
		return findUniqueByProperty("phoneNum", phoneNum);
	}

	public List<UnifiedUser> getByEmail(String email) {
		return findByProperty("email", email);
	}

	public int countByEmail(String email) {
		String hql = "select count(*) from UnifiedUser bean where bean.email=:email";
		Query query = getSession().createQuery(hql);
		query.setParameter("email", email);
		return ((Number) query.iterate().next()).intValue();
	}

	public Pagination getPage(int pageNo, int pageSize) {
		Criteria crit = createCriteria();
		Pagination page = findByCriteria(crit, pageNo, pageSize);
		return page;
	}

	public UnifiedUser findById(Integer id) {
		UnifiedUser entity = get(id);
		return entity;
	}

	public UnifiedUser save(UnifiedUser bean) {
		getSession().save(bean);
		return bean;
	}

	public UnifiedUser deleteById(Integer id) {
		UnifiedUser entity = super.get(id);
		if (entity != null) {
			getSession().delete(entity);
		}
		return entity;
	}

	@Override
	protected Class<UnifiedUser> getEntityClass() {
		return UnifiedUser.class;
	}
}