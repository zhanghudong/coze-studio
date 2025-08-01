/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type Int64 = string | number;

export enum InviteCodeStatus {
  Unactivated = 1,
  Activated = 2,
}

export interface CheckInviteCodeData {
  is_first_invited?: boolean;
}

export interface CheckInviteCodeRequest {
  code?: string;
}

export interface CheckInviteCodeResponse {
  code?: Int64;
  msg?: string;
  data?: CheckInviteCodeData;
}

export interface CheckInWaitListData {
  is_in_wait_list?: boolean;
}

export interface CheckInWaitListRequest {}

export interface CheckInWaitListResponse {
  code?: Int64;
  msg?: string;
  data?: CheckInWaitListData;
}

export interface GetInviteInfoData {
  pass_invite_check?: boolean;
  is_overload?: boolean;
  invite_code_list?: Array<InviteCodeInfo>;
  is_invite_code_locked?: boolean;
}

export interface GetInviteInfoRequest {}

export interface GetInviteInfoResponse {
  code?: Int64;
  msg?: string;
  data?: GetInviteInfoData;
}

export interface InviteCodeInfo {
  code?: string;
  status?: InviteCodeStatus;
  activate_time?: Int64;
}

export interface JoinWaitListRequest {}

export interface JoinWaitListResponse {
  code?: Int64;
  msg?: string;
}
/* eslint-enable */
