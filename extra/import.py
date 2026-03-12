# import csv
# import sys

# def csv_to_js_array(input_file, var_name):
#     data = []

#     with open(input_file, newline="") as f:
#         reader = csv.reader(f)
#         for row in reader:
#             # Convert each value to int or float automatically
#             parsed_row = []
#             for value in row:
#                 value = value.strip()
#                 try:
#                     if "." in value:
#                         parsed_row.append(float(value))
#                     else:
#                         parsed_row.append(int(value))
#                 except:
#                     parsed_row.append(0)
#             data.append(parsed_row)

#     # Print JS declaration
#     print(f"export const {var_name} = [")
#     for row in data:
#         print("  [" + ", ".join(map(str, row)) + "],")
#     print("];")


# if __name__ == "__main__":
#     if len(sys.argv) != 3:
#         print("Usage: python convert.py input.csv VARIABLE_NAME")
#         sys.exit(1)

#     csv_to_js_array(sys.argv[1], sys.argv[2])

import sys
import json
import yaml

def filter_bool(obj):
    if isinstance(obj, dict):
        return {
            k: filter_bool(v)
            for k, v in obj.items()
            if not isinstance(v, bool)
        }
    if isinstance(obj, list):
        return [
            filter_bool(v)
            for v in obj
            if not isinstance(v, bool)
        ]
    return obj

def dumps_compact(obj, indent=4, level=0):
    space = " " * indent * level

    if isinstance(obj, dict):
        if all(not isinstance(v, (dict, list)) for v in obj.values()):
            return json.dumps(obj)

        items = []
        for k, v in obj.items():
            items.append(
                f'\n{" " * indent * (level + 1)}"{k}": {dumps_compact(v, indent, level + 1)}'
            )
        return "{" + ",".join(items) + f"\n{space}" + "}"

    elif isinstance(obj, list):
        items = [
            f'\n{" " * indent * (level + 1)}{dumps_compact(v, indent, level + 1)}'
            for v in obj
        ]
        return "[" + ",".join(items) + f"\n{space}" + "]"

    return json.dumps(obj)

def yaml_to_js(input_file, var_name):
    with open(input_file, "r") as f:
        data = yaml.safe_load(f)

    # Convert Python -> JSON (valid JS object syntax)
    js_object = dumps_compact(filter_bool(data), indent=4)


    print(f"export const {var_name} = {js_object};")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_yaml.py input.yaml VARIABLE_NAME")
        sys.exit(1)

    yaml_to_js(sys.argv[1], sys.argv[2])