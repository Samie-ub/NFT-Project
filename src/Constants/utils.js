import { baseURL } from "./constants"

export const mergePath = path => {
  return baseURL.concat(path)
}
