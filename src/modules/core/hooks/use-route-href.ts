import { RouteType ,
  ROUTES_CONFIG_DESKTOP,
  ROUTES_CONFIG_MOBILE,
} from '@routes/routes';


export const useRouteHref = () => {
  // TODO: Replace with global config
  const isMobile = false;

  return (route: RouteType, query: Partial<Record<string, string | undefined>> = {}) => {
    const routesConfig = isMobile ? ROUTES_CONFIG_MOBILE : ROUTES_CONFIG_DESKTOP;
    const config = routesConfig[route];

    if (/^http/.test(config.pagePath)) {
      return { pathname: config.pagePath };
    }

    return { pathname: config.pagePath, query };
  };
};