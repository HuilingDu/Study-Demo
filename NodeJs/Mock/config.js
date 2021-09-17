const setOnline = [{
	name: 'permission',
	type: 'get',
	url: '/v1/permission'
}, {
	name: 'listProcessInstance',
	type: 'post',
	url: '/uc/v1/process/listProcessInstance'
}, {
	name: 'list',
	type: 'get',
	url: '/uc/v1/app/list'
}, {
	name: 'getDepartmentUserList',
	type: 'get',
	url: '/uc/v1/user/getDepartmentUserList',
	status: 500
}]

module.exports = setOnline;