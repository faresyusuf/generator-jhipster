import { HomeComponent } from './home.component';
import { <%=jhiPrefixCapitalized%>LanguageService } from '../shared';

export const homeState = {
    name: 'home',
    parent: 'app',
    url: '/',
    data: {
        authorities: []
    },
    views: {
        'content@': { component: HomeComponent }
    },
    resolve: [{
        token: 'translate',
        deps: [<%=jhiPrefixCapitalized%>LanguageService],
        resolveFn: (languageService) => languageService.setLocations(['home'])
    }]
}
