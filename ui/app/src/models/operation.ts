import { ResourceType } from "./resourceType";
import { User } from "./user";

export interface Operation {
    id: string,
    resourceId: string,
    resourcePath: string,
    resourceVersion: number,
    status: string,
    action: string,
    message: string,
    createdWhen: number,
    updatedWhen: number,
    user: User,
    steps?: Array<OperationStep>
}

export interface OperationStep {
    stepId: string,
    stepTitle: string,
    resourceId: string,
    resourceTemplateName: string,
    resourceType: ResourceType,
    resourceAction: string,
    status: string,
    message: string,
    updatedWhen: number
}

export const awaitingStates = [
  "awaiting_deployment",
  "awaiting_update",
  "awaiting_deletion"
]

export const completedStates = [
  "deployed",
  "deleted",
  "updated",
  "failed",
  "deleting_failed",
  "updating_failed",
  "action_succeeded",
  "action_failed"
]

export const inProgressStates = [
  "awaiting_deployment",
  "awaiting_update",
  "awaiting_deletion",
  "deploying",
  "updating",
  "deleting",
  "invoking_action",
  "pipeline_running"
]

export const failedStates = [
  "deployment_failed",
  "deleting_failed",
  "updating_failed",
  "action_failed",
]

export const successStates = [
  "deployed",
  "updated",
  "deleted",
  "action_succeeded"
]
