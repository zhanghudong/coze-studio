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

import { get } from 'lodash-es';

import { parseExpression } from '../utils';
import { type SchemaExtractorInputParametersParser } from '../type';
import type { InputValueDTO } from '../../../types';
export const inputParametersParser: SchemaExtractorInputParametersParser =
  inputParameters => {
    let parameters: InputValueDTO[] = [];
    if (!Array.isArray(inputParameters)) {
      if (typeof inputParameters === 'object') {
        Object.keys(inputParameters || {}).forEach(key => {
          parameters.push({
            name: key,
            input: inputParameters[key],
          });
        });
      }
    } else {
      parameters = inputParameters;
    }

    return parameters
      .map(inputParameter => {
        const expression = get(inputParameter, 'input');
        const parsedExpression = parseExpression(expression);
        if (!parsedExpression) {
          return null;
        }
        return {
          name: inputParameter.name,
          ...parsedExpression,
        };
      })
      .filter(Boolean) as ReturnType<SchemaExtractorInputParametersParser>;
  };
