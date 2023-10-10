import NotfoundPage from '../../components/pages/NotfoundPage.vue';

const notfoundRoute = {
   path: '/:notFound(.*)', component: NotfoundPage, name: 'notFound' 
}

export default notfoundRoute;