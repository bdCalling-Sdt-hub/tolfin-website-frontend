export interface PaginationResponse<T> {
  code: number; // HTTP Status Code
  message?: string; // Optional response message
  data?: T; // Generic Data Type
  success?: boolean; // Success Indicator (Default: true)
}
