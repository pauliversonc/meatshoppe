import NotfoundPage from '../../components/pages/NotfoundPage.vue';

const notfoundRoute = {
   path: '/:notFound(.*)', name: 'notFound',  component: NotfoundPage,
}

export default notfoundRoute;