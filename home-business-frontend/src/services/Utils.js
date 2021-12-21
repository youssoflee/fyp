import { intersection } from "lodash";

export function isLoggedIn() {
  /*
   * Note:
   *  This app assume if local storage have roles it means
   *  user is authenticated you can update this logic as per your app.
   */
  return !!localStorage.getItem("user");
}

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes) {
  let userStr = localStorage.getItem("user");
  let user = JSON.parse(userStr);
  let role = user.role.split(' ');

  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, role).length;
  });
}
