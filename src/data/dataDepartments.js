import xray from '../graphics/xray.jpg';
import mri from '../graphics/mriPicture.jpg';
import surgery from '../graphics/surgery.jpg';
import blood from '../graphics/blood.jpg';
import ward from '../graphics/ward.jpg';

const dataDepartment = [
  {
    id: 1,
    name: 'MRI',
    youtube_url:
      'https://www.youtube.com/watch?v=Q_Pa6KFL1Nw&ab_channel=TheChildren%27sHospitalofPhiladelphia',
    picture: mri,
  },
  {
    id: 2,
    name: 'Surgery',
    youtube_url:
      'https://www.youtube.com/watch?v=rBDMwoeh5M4&ab_channel=BritishHeartFoundation',
    picture: surgery,
  },
  {
    id: 3,
    name: 'Blood-taking',
    youtube_url:
      'https://www.youtube.com/watch?v=8WzuYHPPY1M&ab_channel=AfiHealth',
    picture: blood,
  },
  {
    id: 4,
    name: 'Wards',
    youtube_url:
      'https://www.youtube.com/watch?v=cNanxYXk8_o&ab_channel=UniversityHospitalsBristolandWestonNHSFT',
    picture: ward,
  },
  {
    id: 5,
    name: 'X-ray',
    youtube_url:
      'https://www.youtube.com/watch?v=J6Po-Uc7IPY&ab_channel=TheChildren%27sHospitalofPhiladelphia',
    picture: xray,
  },
];

export default dataDepartment;
