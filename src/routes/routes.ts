export enum RouteType {
  home = 'home',
  course = 'course',
  topic = 'topic',
  signIn = 'signIn',
  signUp = 'signUp',
}

interface IRouteConfig {
  pagePath: string;
  permissions: [];
}

export const ROUTES_CONFIG_MOBILE: Partial<Record<RouteType, IRouteConfig>> = {
  [RouteType.home]: {
    pagePath: '/',
    permissions: [],
  },
};

export const ROUTES_CONFIG_DESKTOP: Partial<Record<RouteType, IRouteConfig>> = {
  [RouteType.home]: {
    pagePath: '/', // https://dev.grinfer.com/
    permissions: [],
  },
  [RouteType.course]: {
    pagePath: '/course/[courseSlug]',
    permissions: [],
  },
  [RouteType.topic]: {
    pagePath: '/topic/[topicSlug]',
    permissions: [],
  },
  [RouteType.signIn]: {
    pagePath: 'https://dev.grinfer.com/sign-in',
    permissions: [],
  },
  [RouteType.signUp]: {
    pagePath: 'https://dev.grinfer.com/sign-up',
    permissions: [],
  },
};