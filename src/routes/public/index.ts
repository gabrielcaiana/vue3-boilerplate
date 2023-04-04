const routes = [
	{
		path: '/',
		component: import(
			/* webpackChunkName: "component" */ '~/pages/public/index.vue'
		),
	},
]

export default routes
