import NotFoundPage from '../../components/pages/NotFoundPage.vue';

const notfoundRoute = {
   path: '/:notFound(.*)', name: 'notFound',  component: NotFoundPage,
}

export default notfoundRoute;