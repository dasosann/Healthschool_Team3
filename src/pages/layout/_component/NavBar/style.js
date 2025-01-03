import styled from "styled-components";
//navbar

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

S.MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

S.MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;

S.MenuIcon = styled.div`
  font-size: 20px;
`;

S.MenuLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

S.SubLabelWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 5px;
`;

S.SubLabel = styled.div`
  font-size: 14px;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;

S.ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

S.ProfileImage = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: #555;
  margin-bottom: 10px;
  overflow: hidden;
`;

S.Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.ProfileName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export default S;
