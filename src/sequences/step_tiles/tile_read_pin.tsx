import * as React from "react";
import { StepTitleBar } from "./step_title_bar";
import { splice, remove } from "./index";
import { t } from "i18next";
import { StepInputBox } from "../inputs/step_input_box";
import { StepParams } from "../interfaces";
import { ToolTips } from "../../constants";
import { StepIconGroup } from "../step_icon_group";

export function TileReadPin({ dispatch, currentStep, index, currentSequence }: StepParams) {
  return (<div>
    <div className="step-wrapper">
      <div className="row">
        <div className="col-sm-12">
          <div className="step-header read-pin-step">
            <StepTitleBar index={index}
              dispatch={dispatch}
              step={currentStep}
              sequence={currentSequence} />
            <StepIconGroup
              onClone={() => dispatch(splice({
                step: currentStep,
                index,
                sequence: currentSequence
              }))}
              onTrash={() => remove({ dispatch, index, sequence: currentSequence })}
              helpText={t(ToolTips.READ_PIN)} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="step-content read-pin-step">
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <label>{t("Pin Number")}</label>
                <StepInputBox dispatch={dispatch}
                  step={currentStep}
                  sequence={currentSequence}
                  index={index}
                  field="pin_number" />
              </div>
              <div className="col-xs-6 col-md-3">
                <label>{t("Data Label")}</label>
                <StepInputBox dispatch={dispatch}
                  index={index}
                  step={currentStep}
                  sequence={currentSequence}
                  field="label" />
              </div>
              <div className="col-xs-6 col-md-3">
                <label>{t("Pin Mode")}</label>
                <StepInputBox dispatch={dispatch}
                  step={currentStep}
                  index={index}
                  sequence={currentSequence}
                  field="pin_mode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
