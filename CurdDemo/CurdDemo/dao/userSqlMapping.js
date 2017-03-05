var user = {
	insert: 'insert into t_user (id, name, age) values (0,?,?)',
	update: 'update t_user set name = ?, age = ? where id = ?',
	delete: 'delete from t_user where id = ?',
	quryById: 'select * from t_user where id = ?',
	quryAll : 'select * from t_user'
};

module.exports = user;