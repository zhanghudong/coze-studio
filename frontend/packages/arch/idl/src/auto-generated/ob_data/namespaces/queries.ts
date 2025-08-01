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

export enum QueriesOperation {
  Contains = 0,
  IsNull = 1,
}

export enum QueriesValueType {
  String = 0,
  Enum = 1,
  /** 级联，多级枚举 */
  MultiLevelEnum = 2,
}

export interface FieldMeta {
  /** 支持的筛选动作，如contains, is_null */
  operations?: Array<QueriesOperation>;
  /** value类型，如string, enum */
  value_type?: QueriesValueType;
  /** value结果 */
  value_options?: Array<ParentQueriesValueOption>;
}

export interface ParentQueriesValueOption {
  /** 前端用来筛选的传参 */
  key?: string;
  /** 给前端展示的内容 */
  value?: string;
  /** 级联时的嵌套关系 */
  children?: Array<QueriesValueOption>;
}

export interface QueriesData {
  /** 意图 */
  intent?: string;
  session_id?: string;
  input?: string;
  output?: string;
  /** unix时间戳，ms */
  start_time?: string;
  /** 渠道名，通过starling转换而来 */
  channel?: string;
}

export interface QueriesFilter {
  /** ValueType=String时，在此处传值 */
  string_value?: string;
  /** ValueType=Enum，在此处传值 */
  enums?: Array<string>;
}

export interface QueriesValueOption {
  /** 前端用来筛选的传参 */
  key?: string;
  /** 给前端展示的内容 */
  value?: string;
}
/* eslint-enable */
