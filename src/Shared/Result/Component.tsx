import * as React from 'react'
import {Topic, Snippet} from '../../Models/Topic/Main';

interface IProps {
  topic: Topic
}

export const Result = (props: IProps) => {
  return (
    <div className="result row">
      <div>
        <div>
          <h4>
            <a href='#'>{props.topic.title}</a>
          </h4>
        </div>
      </div>
      {
        props.topic.snippets
          .map((sol: Snippet, i: any) => {
            return (
              <div key={i}>
                <pre>
                  {sol.body}
                </pre>
              </div>
            );
          })
      }
    </div>
  );
};