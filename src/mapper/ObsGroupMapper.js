export class ObsGroupMapper {
  setValue(obsGroup, obs) {
    let updatedObsGroup = obsGroup.addGroupMember(obs);

    const filteredMembers = updatedObsGroup.getGroupMembers()
      .filter(groupMember => groupMember.getValue() !== undefined);
    const voided = updatedObsGroup.getGroupMembers().every((groupMember) => groupMember.isVoided());

    if (filteredMembers.size === 0 || voided) {
      updatedObsGroup = updatedObsGroup.setValue(undefined).void();
    } else {
      updatedObsGroup = updatedObsGroup.set('voided', false);
    }

    return updatedObsGroup;
  }
}