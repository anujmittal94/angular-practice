export interface Launch {
  mission_name: string;
  flight_number: number;
  mission_id: number[];
  launch_year: number;
  launch_success: boolean;
  rocket: {
    first_stage: {
      cores: {
        0: {
          land_success: boolean;
        };
      };
    };
  };
  links: {
    flickr_images: string[];
  };
}
